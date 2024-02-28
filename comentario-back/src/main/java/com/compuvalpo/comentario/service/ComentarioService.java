package com.compuvalpo.comentario.service;

import com.compuvalpo.comentario.exception.NotFoundException;
import com.compuvalpo.comentario.model.Comentario;
import com.compuvalpo.comentario.repository.ComentarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class ComentarioService {
    private final ComentarioRepository comentarioRepository;

    public List<Comentario> findAll(){
        return comentarioRepository.findAll();
    }

    public Comentario findById(Integer id){
        return comentarioRepository.findById(id).orElseThrow(() -> new NotFoundException("Comentario not found"));
    }

    public Comentario create(Comentario comentario){
        comentario.setFecha(LocalDateTime.now());
        return comentarioRepository.save(comentario);
    }

    public Comentario update(Integer id, Comentario comentario){
        Comentario comentarioBD = findById(id);

        comentarioBD.setEmail(comentario.getEmail());
        comentarioBD.setFk_region(comentario.getFk_region());
        comentarioBD.setComentario(comentario.getComentario());
        return comentarioRepository.save(comentarioBD);
    }
    public void delete(Integer id){
        Comentario comentarioBD = findById(id);
        comentarioRepository.delete(comentarioBD);
    }
}
