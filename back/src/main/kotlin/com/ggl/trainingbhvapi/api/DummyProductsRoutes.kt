package com.ggl.trainingbhvapi.api

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import com.ggl.trainingbhvapi.model.DummyProduct
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.io.File
import java.nio.charset.Charset
import java.util.*

@RestController
@RequestMapping(produces = [MediaType.APPLICATION_JSON_VALUE])
class DummyProductsRoutes {
    private var dummyProducts = listOf<DummyProduct>()

    data class Product(var id: String, var name: String, var desc: String, var img: String, var price: String)
    data class Products(var products: List<Product>)

    class ImmutableList<T>(private val inner:List<T>) : List<T> by inner

    init {
        val mapper = jacksonObjectMapper()
        mapper.registerKotlinModule()
        val plainTextData = File("/ggl/bhv-poc-training/back/src/main/resources/static/json/products.json").readText(Charset.defaultCharset())
        val data = mapper.readValue<Products>(plainTextData).products
        val mutableData: MutableList<DummyProduct> = mutableListOf()
        for (product in data)
            mutableData.add(DummyProduct(product.id, product.name, product.desc, product.img, product.price))
        dummyProducts = ImmutableList(mutableData)
    }

    @GetMapping("/dummy/products")
    fun getDummyProducts(): List<DummyProduct> {
        return dummyProducts
    }

    @GetMapping("/dummy/product/{id}")
    fun getDummyProduct(@PathVariable id: String): ResponseEntity<DummyProduct> {
        try {
            val foundDummyProduct = dummyProducts.find { it.id == UUID.fromString(id) }
            if (foundDummyProduct != null) {
                return ResponseEntity(foundDummyProduct, HttpStatus.OK)
            }
        } catch (e: java.lang.IllegalArgumentException) {
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }

        return ResponseEntity(HttpStatus.NO_CONTENT)
    }
}
