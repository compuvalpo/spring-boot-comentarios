package com.compuvalpo.comentario;

import com.compuvalpo.comentario.model.Comentario;
import com.compuvalpo.comentario.repository.ComentarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class ComentarioApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComentarioApplication.class, args);
	}


}
