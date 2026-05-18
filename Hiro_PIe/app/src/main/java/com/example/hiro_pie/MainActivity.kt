package com.example.hiro_pie

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatViewInflater

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun login (viewInflater: View){
        val email = findViewById<TextView>(R.id.log_email).text.toString()
        val senha = findViewById<EditText>(R.id.log_senha).text.toString()

        if (email == "lucas@hotmail.com" && senha == "abc@1234"){
            Toast.makeText( this, "logado com sucesso", Toast.LENGTH_SHORT ).show(

                // abrindo homeactivity
            val intent(this,HomeActiviny::class.java)
            startActivity(intent)
            finish() // opicional, evita voltar para o login
        } else {
            Toast.makeText( this, "email ou senha invalidos", Toast.LENGTH_SHORT).
        }

    }
}