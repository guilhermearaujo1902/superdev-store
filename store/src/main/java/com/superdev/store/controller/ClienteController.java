package com.superdev.store.controller;

import com.superdev.store.model.Cliente;
import com.superdev.store.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cliente")
public class ClienteController {
    
    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public List<Cliente> buscarTodos() {
        return clienteService.buscarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> buscarPorId(@PathVariable int id) {
        Cliente clienteEncontrada = clienteService.buscarPorId(id);
        if (clienteEncontrada == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(clienteEncontrada);
    }

    @PostMapping
    public ResponseEntity<Cliente> adicionar(@RequestBody Cliente cliente) {
        return ResponseEntity.ok(clienteService.salvar(cliente));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> alterar(@RequestBody Cliente cliente, @PathVariable int id) {
        Cliente clienteEncontrada = clienteService.buscarPorId(id);
        if (clienteEncontrada == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(clienteService.salvar(cliente));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Cliente> excluir(@PathVariable int id) {
        Cliente clienteEncontrada = clienteService.buscarPorId(id);
        if (clienteEncontrada == null) {
            return ResponseEntity.notFound().build();
        }
        clienteService.excluir(clienteEncontrada);
        return ResponseEntity.ok(clienteEncontrada);
    }
    
}
