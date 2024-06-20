package com.superdev.store.controller;

import com.superdev.store.model.Produto;
import com.superdev.store.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
    
    @Autowired
    private ProdutoService produtoService;
    
    @GetMapping()
    public List<Produto> buscarTodos() {
        return produtoService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable int id) {
        Produto produtoEncontrado = produtoService.findById(id);
        if (produtoEncontrado == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(produtoEncontrado);
    }

    @GetMapping("/nome/{nome}")
    public List<Produto> buscarProdutoPorNome(@PathVariable String nome){
        return produtoService.buscarProdutoPorNome(nome);
    }

    @PostMapping
    public ResponseEntity<Produto> adicionar(@RequestBody Produto produto) {
        return ResponseEntity.ok(produtoService.save(produto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> alterar(@RequestBody Produto produto, @PathVariable int id) {
        Produto produtoEncontrado = produtoService.findById(id);
        if (produtoEncontrado == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(produtoService.save(produto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Produto> excluir(@PathVariable int id) {
        Produto produtoEncontrado = produtoService.findById(id);
        if (produtoEncontrado == null) {
            return ResponseEntity.notFound().build();
        }
        produtoService.delete(produtoEncontrado);
        return ResponseEntity.ok(produtoEncontrado);
    }

    @PatchMapping("/comprar/{id}")
    public ResponseEntity<Produto> comprar(@RequestBody int quantidade, @PathVariable int id) {
        if (produtoService.comprar(id, quantidade)) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PatchMapping("/vender/{id}")
    public ResponseEntity<Produto> vender(@RequestBody int quantidade, @PathVariable int id) {
        if (produtoService.vender(id, quantidade)) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
    
}
