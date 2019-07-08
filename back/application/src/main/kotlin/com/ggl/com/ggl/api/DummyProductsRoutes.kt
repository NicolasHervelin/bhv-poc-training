package com.ggl.com.ggl.api

import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import com.ggl.com.ggl.model.DummyProduct
import com.google.gson.Gson
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.io.BufferedReader
import java.io.File

@RestController
@RequestMapping(produces = [MediaType.APPLICATION_JSON_VALUE])
class DummyProductsRoutes {

    data class Products(var id: String, var name: String, var desc: String, var img: String, var price: String)

    data class ProductsConfig(
            @JsonProperty("products") val products: List<Products> = emptyList()
    )

    @GetMapping("/dummy/products")
    fun getDummyProducts(): ArrayList<DummyProduct> {
        var gson = Gson()

        val mapper = jacksonObjectMapper()
        mapper.registerKotlinModule()

        val jsonString : String = File("C:\\Users\\p_nhervelin\\Documents\\dev\\newGL\\POC-training\\back\\application\\src\\main\\resources\\static\\json\\products.json").readText(Charsets.UTF_8)

        val jsonTextList = mapper.readValue<ProductsConfig>(jsonString).products

        var dummyProducts = arrayListOf<DummyProduct>()

        for (product in jsonTextList) {
            //var productConverted = gson.fromJson(product, DummyProduct::class.java)
            dummyProducts.add(DummyProduct(product.id, product.name, product.desc, product.img, product.price))
        }

        return dummyProducts
    }



}
