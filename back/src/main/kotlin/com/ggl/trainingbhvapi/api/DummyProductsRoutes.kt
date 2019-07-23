package com.ggl.trainingbhvapi.api

import com.ggl.trainingbhvapi.model.DummyProduct
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(produces = [MediaType.APPLICATION_JSON_VALUE])
class DummyProductsRoutes {

    data class Products(var id: String, var name: String, var desc: String, var img: String, var price: String)

    @GetMapping("/dummy/products")
    fun getDummyProducts(): ArrayList<DummyProduct> {
        var dummyProducts = arrayListOf<DummyProduct>()

        return dummyProducts
    }



}
