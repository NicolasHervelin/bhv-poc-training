package com.ggl.com.ggl.model

import java.math.BigDecimal
import java.util.UUID

class DummyProduct {
    var id: UUID? = null
    var name: String? = null
    var desc: String? = null
    var img: String? = null
    var price: BigDecimal? = null

    constructor(id: String, name: String, desc: String, img: String, price: String) {
        this.id = UUID.fromString(id)
        this.name = name
        this.desc = desc
        this.img = img
        this.price = price.toBigDecimal()
    }

}
