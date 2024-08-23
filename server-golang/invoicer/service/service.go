package invoiceService

import (
	"context"
	invoicer "grpc-golang/invoicer/proto"
	"log"
	"net"

	"google.golang.org/grpc"
)

type serviceInvoicer struct {
	invoicer.UnimplementedInvoicerServer
}

func (s serviceInvoicer) Create(ctx context.Context, req *invoicer.CreateRequest) (*invoicer.CreateResponse, error) {
	log.Print("Create invoice")
	return &invoicer.CreateResponse{
		Pdf:  []byte(req.From),
		Docx: []byte("Test"),
	}, nil
}

func Init(listener *net.Listener, server *grpc.Server) {
	service := &serviceInvoicer{}
	invoicer.RegisterInvoicerServer(server, service)

	log.Print("Init Invoicer service")
}
