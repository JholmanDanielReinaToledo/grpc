// package: user
// file: proto/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Response extends jspb.Message { 
    getCode(): number;
    setCode(value: number): Response;
    getMessage(): string;
    setMessage(value: string): Response;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
    export type AsObject = {
        code: number,
        message: string,
    }
}

export class UserModel extends jspb.Message { 
    getId(): number;
    setId(value: number): UserModel;
    getName(): string;
    setName(value: string): UserModel;
    getNumber(): string;
    setNumber(value: string): UserModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserModel.AsObject;
    static toObject(includeInstance: boolean, msg: UserModel): UserModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserModel;
    static deserializeBinaryFromReader(message: UserModel, reader: jspb.BinaryReader): UserModel;
}

export namespace UserModel {
    export type AsObject = {
        id: number,
        name: string,
        number: string,
    }
}

export class CreateUserRequest extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): CreateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        user?: UserModel.AsObject,
    }
}

export class CreateUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): CreateUserResponse;

    hasRes(): boolean;
    clearRes(): void;
    getRes(): Response | undefined;
    setRes(value?: Response): CreateUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
    static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
    export type AsObject = {
        user?: UserModel.AsObject,
        res?: Response.AsObject,
    }
}

export class DeleteUserRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
    static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
    export type AsObject = {
        id: number,
    }
}

export class DeleteUserResponse extends jspb.Message { 

    hasRes(): boolean;
    clearRes(): void;
    getRes(): Response | undefined;
    setRes(value?: Response): DeleteUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
    static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
    export type AsObject = {
        res?: Response.AsObject,
    }
}

export class GetByIdUserRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetByIdUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByIdUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetByIdUserRequest): GetByIdUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByIdUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByIdUserRequest;
    static deserializeBinaryFromReader(message: GetByIdUserRequest, reader: jspb.BinaryReader): GetByIdUserRequest;
}

export namespace GetByIdUserRequest {
    export type AsObject = {
        id: number,
    }
}

export class GetByIdUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserModel | undefined;
    setUser(value?: UserModel): GetByIdUserResponse;

    hasRes(): boolean;
    clearRes(): void;
    getRes(): Response | undefined;
    setRes(value?: Response): GetByIdUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetByIdUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetByIdUserResponse): GetByIdUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetByIdUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetByIdUserResponse;
    static deserializeBinaryFromReader(message: GetByIdUserResponse, reader: jspb.BinaryReader): GetByIdUserResponse;
}

export namespace GetByIdUserResponse {
    export type AsObject = {
        user?: UserModel.AsObject,
        res?: Response.AsObject,
    }
}
