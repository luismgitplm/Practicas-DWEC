<?php
header('Content-Type: application/json; charset=utf-8');

// Array de personajes de Dragon Ball
$personajes = [
    "goku" => [
        "nombre" => "Goku",
        "raza" => "Saiyan",
        "nivel_poder" => 9001,
        "tecnica" => "Kamehameha",
        "imagen" => "img2/goku.jpg"
    ],
    "vegeta" => [
        "nombre" => "Vegeta",
        "raza" => "Saiyan",
        "nivel_poder" => 8500,
        "tecnica" => "Final Flash",
        "imagen" => "img2/vegeta.jpg"
    ],
    "gohan" => [
        "nombre" => "Gohan",
        "raza" => "Saiyan",
        "nivel_poder" => 8000,
        "tecnica" => "Masenko",
        "imagen" => "img2/gohan.jpg"
    ],
    "piccolo" => [
        "nombre" => "Piccolo",
        "raza" => "Namekiano",
        "nivel_poder" => 7000,
        "tecnica" => "Makankosappo",
        "imagen" => "img2/pikolo.jpg"
    ]
];

// Comprobamos si llega el parámetro personaje
if (isset($_GET['personaje'])) {
    $personaje = strtolower($_GET['personaje']);

    if (array_key_exists($personaje, $personajes)) {
        echo json_encode($personajes[$personaje], JSON_PRETTY_PRINT);
    } else {
        echo json_encode([
            "error" => "Personaje no encontrado"
        ]);
    }
} else {
    echo json_encode([
        "error" => "No se ha enviado el parámetro personaje"
    ]);
}