package com.superdev.store.controller;

import com.superdev.store.model.Pedido;
import com.superdev.store.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedido")
public class PedidoController {
    
    @Autowired
    private PedidoService pedidoService;

    @GetMapping
    public List<Pedido> buscarTodos() {
        return pedidoService.buscarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pedido> buscarPorId(@PathVariable int id) {
        Pedido pedidoEncontrada = pedidoService.buscarPorId(id);
        if (pedidoEncontrada == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(pedidoEncontrada);
    }

    @PostMapping
    public ResponseEntity<Pedido> adicionar(@RequestBody Pedido pedido) {
        return ResponseEntity.ok(pedidoService.salvar(pedido));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pedido> alterar(@RequestBody Pedido pedido, @PathVariable int id) {
        Pedido pedidoEncontrada = pedidoService.buscarPorId(id);
        if (pedidoEncontrada == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(pedidoService.salvar(pedido));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Pedido> excluir(@PathVariable int id) {
        Pedido pedidoEncontrada = pedidoService.buscarPorId(id);
        if (pedidoEncontrada == null) {
            return ResponseEntity.notFound().build();
        }
        pedidoService.excluir(pedidoEncontrada);
        return ResponseEntity.ok(pedidoEncontrada);
    }
    
}
