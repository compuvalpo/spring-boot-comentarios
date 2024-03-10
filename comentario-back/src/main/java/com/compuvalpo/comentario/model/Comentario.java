package com.compuvalpo.comentario.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table (name = "comentario")
public class Comentario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
	
    @NotNull(message = "Debe agregar el email.")
    @NotBlank(message = "El campo email no puede estar vacio.")
    private String email;
	
    @NotNull(message = "Debe agregar la region.")
    private Integer fk_region;
	
    @NotNull(message = "Debe agregar el comentario.")
    @NotBlank(message = "El campo comentario no puede estar vacio.")
    private String comentario;
	
    private LocalDateTime fecha;

    public Comentario() {
    }

    public Comentario(String email, Integer fk_region, String comentario) {
        this.email = email;
        this.fk_region = fk_region;
        this.comentario = comentario;
        this.fecha = LocalDateTime.now();
    }

}
