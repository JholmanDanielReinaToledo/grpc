package main

import (
	"context"
	invoicer "grpc-golang/invoicer/proto"
	invoiceService "grpc-golang/invoicer/service"
	userSevice "grpc-golang/user/service"
	"log"
	"net"

	"google.golang.org/grpc"
)

type myInvoicerServer struct {
	invoicer.UnimplementedInvoicerServer
}

func (s myInvoicerServer) Create(ctx context.Context, req *invoicer.CreateRequest) (*invoicer.CreateResponse, error) {
	log.Print("Create invoice")
	return &invoicer.CreateResponse{
		Pdf:  []byte(req.From),
		Docx: []byte("Test"),
	}, nil
}

func main() {
	port := ":8089"
	listener, err := net.Listen("tcp", port)

	if err != nil {
		log.Fatalf("cannot create listener: %s", err)
	}

	serverRegister := grpc.NewServer()

	invoiceService.Init(&listener, serverRegister)
	userSevice.Init(&listener, serverRegister)

	log.Printf("Server running at port: %s", port)
	err2 := serverRegister.Serve(listener)
	if err2 != nil {
		log.Fatal(err2)
	}
}
