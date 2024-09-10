package userSevice

import (
	"context"
	user "grpc-golang/user/proto"
	userRepository "grpc-golang/user/repository"
	"log"
	"net"

	"google.golang.org/grpc"
)

type serviceUser struct {
	user.UnimplementedUserServer
}

func (s serviceUser) Create(ctx context.Context, req *user.CreateUserRequest) (*user.CreateUserResponse, error) {
	newUser, err := userRepository.Create(userRepository.UserModel{
		Id:     req.User.Id,
		Name:   req.User.Name,
		Number: req.User.Number,
	})

	if err != nil {
		return nil, err
	}

	return &user.CreateUserResponse{
		User: &user.UserModel{
			Id:     newUser.Id,
			Name:   newUser.Name,
			Number: newUser.Number,
		},
		Res: &user.Response{
			Code:    200,
			Message: "Ok",
		},
	}, nil
}

func (s serviceUser) Delete(ctx context.Context, req *user.DeleteUserRequest) (*user.DeleteUserResponse, error) {
	err := userRepository.Delete(req.Id)
	if err != nil {
		return nil, err
	}

	return &user.DeleteUserResponse{
		Res: &user.Response{
			Code:    200,
			Message: "User deleted",
		},
	}, nil
}

func (s serviceUser) GetById(ctx context.Context, req *user.GetByIdUserRequest) (*user.GetByIdUserResponse, error) {
	userTemp, err := userRepository.GetById(req.Id)
	if err != nil {
		return nil, err
	}

	return &user.GetByIdUserResponse{
		User: &user.UserModel{
			Id:     userTemp.Id,
			Name:   userTemp.Name,
			Number: userTemp.Number,
		},
		Res: &user.Response{
			Code:    200,
			Message: "Ok",
		},
	}, nil
}

func Init(listener *net.Listener, server *grpc.Server) {
	service := &serviceUser{}
	user.RegisterUserServer(server, service)

	log.Print("Init User service")
}
