// package: user
// file: proto/user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_user_pb from "../proto/user_pb";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IUserService_ICreate;
    delete: IUserService_IDelete;
    getById: IUserService_IGetById;
}

interface IUserService_ICreate extends grpc.MethodDefinition<proto_user_pb.CreateUserRequest, proto_user_pb.CreateUserResponse> {
    path: "/user.User/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_user_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<proto_user_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<proto_user_pb.CreateUserResponse>;
    responseDeserialize: grpc.deserialize<proto_user_pb.CreateUserResponse>;
}
interface IUserService_IDelete extends grpc.MethodDefinition<proto_user_pb.DeleteUserRequest, proto_user_pb.DeleteUserResponse> {
    path: "/user.User/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_user_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<proto_user_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<proto_user_pb.DeleteUserResponse>;
    responseDeserialize: grpc.deserialize<proto_user_pb.DeleteUserResponse>;
}
interface IUserService_IGetById extends grpc.MethodDefinition<proto_user_pb.GetByIdUserRequest, proto_user_pb.GetByIdUserResponse> {
    path: "/user.User/GetById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_user_pb.GetByIdUserRequest>;
    requestDeserialize: grpc.deserialize<proto_user_pb.GetByIdUserRequest>;
    responseSerialize: grpc.serialize<proto_user_pb.GetByIdUserResponse>;
    responseDeserialize: grpc.deserialize<proto_user_pb.GetByIdUserResponse>;
}

export const UserService: IUserService;

export interface IUserServer {
    create: grpc.handleUnaryCall<proto_user_pb.CreateUserRequest, proto_user_pb.CreateUserResponse>;
    delete: grpc.handleUnaryCall<proto_user_pb.DeleteUserRequest, proto_user_pb.DeleteUserResponse>;
    getById: grpc.handleUnaryCall<proto_user_pb.GetByIdUserRequest, proto_user_pb.GetByIdUserResponse>;
}

export interface IUserClient {
    create(request: proto_user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    create(request: proto_user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    create(request: proto_user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    delete(request: proto_user_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    delete(request: proto_user_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    delete(request: proto_user_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    getById(request: proto_user_pb.GetByIdUserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.GetByIdUserResponse) => void): grpc.ClientUnaryCall;
    getById(request: proto_user_pb.GetByIdUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.GetByIdUserResponse) => void): grpc.ClientUnaryCall;
    getById(request: proto_user_pb.GetByIdUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.GetByIdUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: proto_user_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public create(request: proto_user_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public create(request: proto_user_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public delete(request: proto_user_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public delete(request: proto_user_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public delete(request: proto_user_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public getById(request: proto_user_pb.GetByIdUserRequest, callback: (error: grpc.ServiceError | null, response: proto_user_pb.GetByIdUserResponse) => void): grpc.ClientUnaryCall;
    public getById(request: proto_user_pb.GetByIdUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_user_pb.GetByIdUserResponse) => void): grpc.ClientUnaryCall;
    public getById(request: proto_user_pb.GetByIdUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_user_pb.GetByIdUserResponse) => void): grpc.ClientUnaryCall;
}
