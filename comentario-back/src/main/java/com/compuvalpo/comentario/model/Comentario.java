package com.compuvalpo.comentario.model;

import jakarta.persistence.*;
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
    private String email;
    private Integer fk_region;
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
