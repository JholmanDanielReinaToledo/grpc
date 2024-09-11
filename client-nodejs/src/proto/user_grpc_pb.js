// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_user_pb = require('../proto/user_pb.js');

function serialize_user_CreateUserRequest(arg) {
  if (!(arg instanceof proto_user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type user.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_CreateUserRequest(buffer_arg) {
  return proto_user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_CreateUserResponse(arg) {
  if (!(arg instanceof proto_user_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type user.CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_CreateUserResponse(buffer_arg) {
  return proto_user_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_DeleteUserRequest(arg) {
  if (!(arg instanceof proto_user_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type user.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_DeleteUserRequest(buffer_arg) {
  return proto_user_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_DeleteUserResponse(arg) {
  if (!(arg instanceof proto_user_pb.DeleteUserResponse)) {
    throw new Error('Expected argument of type user.DeleteUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_DeleteUserResponse(buffer_arg) {
  return proto_user_pb.DeleteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetByIdUserRequest(arg) {
  if (!(arg instanceof proto_user_pb.GetByIdUserRequest)) {
    throw new Error('Expected argument of type user.GetByIdUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetByIdUserRequest(buffer_arg) {
  return proto_user_pb.GetByIdUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetByIdUserResponse(arg) {
  if (!(arg instanceof proto_user_pb.GetByIdUserResponse)) {
    throw new Error('Expected argument of type user.GetByIdUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetByIdUserResponse(buffer_arg) {
  return proto_user_pb.GetByIdUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  create: {
    path: '/user.User/Create',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_pb.CreateUserRequest,
    responseType: proto_user_pb.CreateUserResponse,
    requestSerialize: serialize_user_CreateUserRequest,
    requestDeserialize: deserialize_user_CreateUserRequest,
    responseSerialize: serialize_user_CreateUserResponse,
    responseDeserialize: deserialize_user_CreateUserResponse,
  },
  delete: {
    path: '/user.User/Delete',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_pb.DeleteUserRequest,
    responseType: proto_user_pb.DeleteUserResponse,
    requestSerialize: serialize_user_DeleteUserRequest,
    requestDeserialize: deserialize_user_DeleteUserRequest,
    responseSerialize: serialize_user_DeleteUserResponse,
    responseDeserialize: deserialize_user_DeleteUserResponse,
  },
  getById: {
    path: '/user.User/GetById',
    requestStream: false,
    responseStream: false,
    requestType: proto_user_pb.GetByIdUserRequest,
    responseType: proto_user_pb.GetByIdUserResponse,
    requestSerialize: serialize_user_GetByIdUserRequest,
    requestDeserialize: deserialize_user_GetByIdUserRequest,
    responseSerialize: serialize_user_GetByIdUserResponse,
    responseDeserialize: deserialize_user_GetByIdUserResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
