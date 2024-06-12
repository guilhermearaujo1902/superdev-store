package com.superdev.store.controller;

import com.superdev.store.model.Caixa;
import com.superdev.store.service.CaixaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/caixa")
public class CaixaController {
    
    @Autowired
    private CaixaService caixaService;

    @GetMapping
    public List<Caixa> buscarTodos() {
        return caixaService.buscarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Caixa> buscarPorId(@PathVariable int id) {
        Caixa caixaEncontrada = caixaService.buscarPorId(id);
        if (caixaEncontrada == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(caixaEncontrada);
    }

    @PostMapping
    public ResponseEntity<Caixa> adicionar(@RequestBody Caixa caixa) {
        return ResponseEntity.ok(caixaService.salvar(caixa));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Caixa> alterar(@RequestBody Caixa caixa, @PathVariable int id) {
        Caixa caixaEncontrada = caixaService.buscarPorId(id);
        if (caixaEncontrada == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(caixaService.salvar(caixa));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Caixa> excluir(@PathVariable int id) {
        Caixa caixaEncontrada = caixaService.buscarPorId(id);
        if (caixaEncontrada == null) {
            return ResponseEntity.notFound().build();
        }
        caixaService.excluir(caixaEncontrada);
        return ResponseEntity.ok(caixaEncontrada);
    }
    
}
