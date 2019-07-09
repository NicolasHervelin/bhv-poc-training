package com.ggl.trainingbhvapi.back.application

import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import com.ggl.com.ggl.api.DummyProductsRoutes
import com.ggl.com.ggl.model.DummyProduct
import com.ggl.com.ggl.model.DummyProducts
import com.nhaarman.mockito_kotlin.mock
import com.nhaarman.mockito_kotlin.verify
import com.nhaarman.mockito_kotlin.whenever
import org.assertj.core.api.Assertions
import org.junit.Test
import org.junit.runner.RunWith
import org.mockito.Mockito
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner
import java.io.File
import java.util.*
import kotlin.collections.ArrayList
import kotlin.test.assertEquals

@RunWith(SpringRunner::class)
@SpringBootTest
class applicationTests {
	var product1 = DummyProduct("38400000-8cf0-11bd-b23e-10b96e4ef00d","First product","This is the first product description. Yes we did it !", "images/first_img","1000")
	var product2 = DummyProduct("38400000-8cf0-11bd-b23e-10b96e4ef00e","First product","This is the first product description. Yes we did it !", "images/first_img","1000")
	var product3 = DummyProduct("38400000-8cf0-11bd-b23e-10b96e4ef00c","First product","This is the first product description. Yes we did it !", "images/first_img","1000")
	var mockedDummyProducts = initProductList(product1, product2, product3)

	val mockedService : DummyProductsRoutes = mock()

	//id: String, name: String, desc: String, img: String, price: String
	fun initProductList(product1: DummyProduct, product2: DummyProduct, product3: DummyProduct): ArrayList<DummyProduct> {
		var dummyProducts = arrayListOf<DummyProduct>()
		dummyProducts.add(product1)
		dummyProducts.add(product2)
		dummyProducts.add(product3)

		return dummyProducts
	}

	@Test
	fun contextLoads() {
		val mapper = jacksonObjectMapper()
		mapper.registerKotlinModule()

		val jsonString : String = File("C:\\Users\\p_nhervelin\\Documents\\dev\\newGL\\POC-training\\back\\application\\src\\main\\resources\\static\\json\\products.json").readText(Charsets.UTF_8)

		val jsonTextList = mapper.readValue<DummyProductsRoutes.ProductsConfig>(jsonString).products
		for (product in jsonTextList) {
			println(product)
		}
	}

	@Test
	fun verify_getDummyProducts_is_called() {
		whenever(mockedService.getDummyProducts()).thenReturn(mockedDummyProducts)
		mockedService.getDummyProducts()
		verify(mockedService).getDummyProducts()
	}

}
