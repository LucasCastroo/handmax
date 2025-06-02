package br.org.handmaxx.resource;

import br.org.handmaxx.dto.email.EmailDTO;
import br.org.handmaxx.service.email.EmailService;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/email")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class EmailResource {
    @Inject
    EmailService emailService;

    @POST
    public Response enviarEmail(EmailDTO dto){
        return Response.status(201).entity(emailService.salvarEnviarEmail(dto)).build();
    }
}
