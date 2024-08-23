package userRepository

import "errors"

type UserModel struct {
	Id     int64
	Name   string
	Number string
}

var users = []UserModel{
	{Id: 1, Name: "Juan", Number: "123123"},
	{Id: 2, Name: "Pedro", Number: "321"},
	{Id: 3, Name: "David", Number: "1111"},
	{Id: 4, Name: "Julian", Number: "512"},
	{Id: 5, Name: "Maria", Number: "641"},
}

func Create(newUser UserModel) (*UserModel, error) {
	users = append(users, newUser)
	return &newUser, nil
}

func Delete(id int64) error {
	userIndex := -1
	for i, user := range users {
		if user.Id == id {
			userIndex = i
			break
		}
	}

	if userIndex == -1 {
		return errors.New("user not found")
	}

	users = append(users[:userIndex], users[userIndex+1:]...)

	return nil
}

func GetById(id int64) (*UserModel, error) {
	for _, userTemp := range users {
		if id == userTemp.Id {
			return &userTemp, nil
		}
	}

	return nil, errors.New("user not found")
}
