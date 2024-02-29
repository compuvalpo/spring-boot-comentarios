package com.compuvalpo.comentario.controller;

import com.compuvalpo.comentario.model.Comentario;
import com.compuvalpo.comentario.service.ComentarioService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/comentario")
@AllArgsConstructor
@CrossOrigin //(origins = "http://localhost:9002")
public class ComentarioController {

    private final ComentarioService comentarioService;

    @GetMapping()
    public List<Comentario> list(){
        return comentarioService.findAll();
    }
    @GetMapping("{id}")
    public Comentario get(@PathVariable Integer id){
        return comentarioService.findById(id);
    }
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Comentario create(@RequestBody Comentario comentario){
        return comentarioService.create(comentario);
    }
    @PutMapping("{id}")
    public Comentario update(@PathVariable Integer id, @RequestBody Comentario comentario){
        return comentarioService.update(id, comentario);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id){
        comentarioService.delete(id);
    }
}
