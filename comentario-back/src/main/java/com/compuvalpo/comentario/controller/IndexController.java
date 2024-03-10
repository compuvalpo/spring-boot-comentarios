package com.compuvalpo.comentario.controller;

import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
@NoArgsConstructor
@CrossOrigin
public class IndexController {
    @Autowired

    @GetMapping("")
    public String index(){
        return "ok";
    }
}
