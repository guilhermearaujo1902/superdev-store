package com.superdev.store.service;

import com.superdev.store.model.Produto;
import com.superdev.store.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> findAll() {
        return produtoRepository.findAll();
    }

    public Produto findById(int id) {
        return produtoRepository.findById(id).orElse(null);
    }

    public Produto save(Produto produto) {
        return produtoRepository.save(produto);
    }

    public void delete(Produto produto) {
        produtoRepository.delete(produto);
    }

    public boolean comprar(int id, int quantidade){
        // Validando se o produto existe no banco de dados
        Produto produtoEncontrado = findById(id);
        if (produtoEncontrado == null) {
            return false;
        }

        // Adicionar na quantidade do produto o valor que veio por parâmetro
        produtoEncontrado.setQuantidade(produtoEncontrado.getQuantidade() + quantidade);

        // Atualiza as informações no banco de dados
        save(produtoEncontrado);
        return true;
    }

    public boolean vender(int id, int quantidade) {
        // Validando se o produto existe no banco de dados
        Produto produtoEncontrado = findById(id);
        if (produtoEncontrado == null || produtoEncontrado.getQuantidade() < quantidade) {
            return false;
        }

        // Remover da quantidade do produto o valor que veio por parâmetro
        produtoEncontrado.setQuantidade(produtoEncontrado.getQuantidade() - quantidade);

        // Atualiza as informações no banco de dados
        save(produtoEncontrado);
        return true;
    }

    public List<Produto> buscarProdutoPorNome(String nome) {
        return produtoRepository.buscarProdutoPorNome(nome);
    }

}
