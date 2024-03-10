package com.compuvalpo.comentario;

import com.compuvalpo.comentario.model.Comentario;
import com.compuvalpo.comentario.repository.ComentarioRepository;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class ComentarioApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComentarioApplication.class, args);
	}


	@Bean
	CommandLineRunner runner(ComentarioRepository comentarioRepository){
		return args -> {
            List<Comentario> comentario = Arrays.asList(
                    new Comentario("prueba1@gmail.com",1,"Comentario 1 de Prueba"),
                    new Comentario("prueba2@gmail.com",13,"Comentario 2 de Prueba"),
                    new Comentario("prueba3@gmail.com",5,"Comentario 3 de Prueba")
            );
            comentarioRepository.saveAll(comentario);
        };
	}

	@Bean
	public OpenAPI customOpenAPI(){
		return new OpenAPI()
				.info(new Info()
								.title("API DEFINITION")
								.version("1.0")
								.description("API de Comentarios")
				);
	}
}
