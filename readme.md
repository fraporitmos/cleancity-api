# Project: Taxi API
# 📁 Collection: Admin 


## End-point: Registrar Admin
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/admin/register
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|nombres|Richard Francisco|text|
|apellidos|Espino Mostacero|text|
|correo|frapo@gmail.com|text|
|telefono|949839769|text|
|clave|123|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login Admin
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/admin/auth
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|correo|admin_unt@outlook.com|text|
|clave|admin|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Passenger 


## End-point: Get Lugares
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/passenger/getplaces
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token-passenger|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9wZXJzb25hIjo5MCwiaWRfcGFzYWplcm8iOjgwLCJpZF9jdWVudGEiOjg4LCJub21icmVzIjoicHVzc3kiLCJ0ZWxlZm9ubyI6Ijk4NTg5NTc2NyIsImNvcnJlbyI6ImZyYXBvX2RldkBnbWFpbC5jb20iLCJlc3RhZG8iOiJpbmFjdGl2byIsImlhdCI6MTY2NjYyNjM3MSwiZXhwIjoxNjgyMTc4MzcxfQ.A3QxYStpS9LJObwILIcMBT7U1_2c4tIlpA-2fk1bo-U|


### Body formdata

|Param|value|Type|
|---|---|---|
|id_pasajero|82|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Guardar Lugar
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/passenger/places
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token-passenger|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9wZXJzb25hIjo5MCwiaWRfcGFzYWplcm8iOjgwLCJpZF9jdWVudGEiOjg4LCJub21icmVzIjoicHVzc3kiLCJ0ZWxlZm9ubyI6Ijk4NTg5NTc2NyIsImNvcnJlbyI6ImZyYXBvX2RldkBnbWFpbC5jb20iLCJlc3RhZG8iOiJpbmFjdGl2byIsImlhdCI6MTY2NjYyNjM3MSwiZXhwIjoxNjgyMTc4MzcxfQ.A3QxYStpS9LJObwILIcMBT7U1_2c4tIlpA-2fk1bo-U|


### Body formdata

|Param|value|Type|
|---|---|---|
|id_pasajero|82|text|
|titulo|Mercado|text|
|address|Calle San Pedro #5642|text|
|latitud|1.2234433|text|
|longitud|-1.2445566|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login Opt
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/passenger/authoptsms
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|telefono|949494949|text|
|idtoken|fsdf325|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login Credentials
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/passenger/authcredentials
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|correo|frapo_dev@gmail.com|text|
|clave|frapo_dev|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login Social Media
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/passenger/authsocialmedia
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|nombres|tufarrukito|text|
|correo|fraporitmos@gmail.com|text|
|idtoken|111956410801594897402|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Passenger
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/passenger/update
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|nombres|Test Update|text|
|correo|testupdate2@gmail.com|text|
|telefono|949392345|text|
|id_persona|72|text|
|id_cuenta|75|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Registrar pasajero
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/passenger/register
>```
### Body (**raw**)

```json
{
    "nombres":"fj",
    "correo":"efef@gmail.com",
    "telefono":"985895767",
    "clave":"frapo"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Routes 


## End-point: Get Routes
### Method: GET
>```
>https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62483538472ea6fc46058fd963320331969e&start=-79.4702093735856,-7.243266641992528&end=-79.47496826578401,-7.240280006132689
>```
### Body formdata

|Param|value|Type|
|---|---|---|


### Query Params

|Param|value|
|---|---|
|api_key|5b3ce3597851110001cf62483538472ea6fc46058fd963320331969e|
|start|-79.4702093735856,-7.243266641992528|
|coordinates|[[8.697610, 49.396228],[8.697610,49.396228]]|
|end|-79.47496826578401,-7.240280006132689|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Driver 


## End-point: Post Driver
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/driver
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|nombres|Merardo Salazar Bondi|text|
|telefono|949895768|text|
|correo|merardo@gmail.com|text|
|placa|HFD-44|text|
|marca|Toyota|text|
|unidad|103|text|
|color|Azul|text|
|anio|2018|text|
|clave|123|text|
|foto|/C:/Users/Frapo/Downloads/peru.png|file|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Drivers
### Method: GET
>```
>https://taxivespro.com/arequipaapi/api/driver
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Auth
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/driver/auth
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|correo|meta@gmail.com|text|
|clave|123|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: State driver
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/driver/state
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|id_conductor|3|text|
|estado|activo|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: History Date
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/history/datedriver
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|id_conductor|64|text|
|date|2022-12-19|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: History 10
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/history/defaultdriver
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|id_conductor|64|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update with photo
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/driver/updatephoto
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|id_persona|3|text|
|nombres|Frapo|text|
|telefono|949858666|text|
|correo|frapo2gmail.com|text|
|foto|/C:/Users/Frapo/OneDrive/Imágenes/orbita.jpeg|file|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Driver
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/driver/updatedriver
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|id_persona|3|text|
|nombres|Jossep Melendez Melendez|text|
|telefono|949794755|text|
|correo|joseep@gmail.com|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Info Vehiculo
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/driver/infovehiculo
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|id_vehiculo|2|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Info driver
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/driver/infodriver
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|id_persona|3|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Request 


## End-point: Post Request
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/request
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|id_pasajero|19|text|
|latitud_origen|-7.243405658788569|text|
|longitud_origen|-79.46995995487529|text|
|longitud_destino|-79.47140470882894|text|
|direccion_actual|Plaza de armas Guadalupe|text|
|direccion_destino|Calle Panama #234|text|
|referencia|los rosales|text|
|latitud_destino|-7.232537051891145|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Request
### Method: GET
>```
>https://taxivespro.com/arequipaapi/api/request
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Request Info
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/request/info
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|id_solicitud|4|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Token 


## End-point: Push Driver
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/token/pushdriver
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Authorization|key=AAAAswVlgTI:APA91bFhP42yzQELykzcOnPDroTfSc3gjb7GJUoLJBRZZYBcZ8DXzbIrsjbqbQtTiIFAZHHjdFHbI3-xKMeAbt6YFYr9ox02meRdcQ-fJORF520BNebF0VtbBMWvfz5XFiyfm8wNpMvx|


### Body formdata

|Param|value|Type|
|---|---|---|
|titulo|Hoikaa|text|
|descripcion|Pruebitaaa|text|
|token|eYO7ZpFRR862eNeu8AWicj:APA91bFkaOBV4qCzCwpMeqygLtMeNlIlRaFT_xfXO27IDZu2I8LS2iIengB_Sv6UBrDgFaw6tl1gZ7FCR1U9fFnOdIijAeiY5Pwc56plv5nQKUxL8lhpoZ9v9-mlV-OGSrXtrAtGvcg8|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Push Passenger
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/token/pushpassenger
>```
### Headers

|Content-Type|Value|
|---|---|
|Content-Type|application/json|


### Headers

|Content-Type|Value|
|---|---|
|Authorization|key=AAAACE-Dbr0:APA91bFz-fOsPXX-TlLzLzRHDjGK52aVQCjLal8udv-V8lyCL1sy7b8r1LBIv8byw54xWuK1ORE_hb2LaXgmrwJE-TBifMpWJfcLb6tOYo8CnFR1KaKNHvTNRy3Mdz9K1vB-cjqjV3ah|


### Body formdata

|Param|value|Type|
|---|---|---|
|titulo|Hola pruebita|text|
|descripcion|sdfgmds |text|
|token|eYO7ZpFRR862eNeu8AWicj:APA91bFkaOBV4qCzCwpMeqygLtMeNlIlRaFT_xfXO27IDZu2I8LS2iIengB_Sv6UBrDgFaw6tl1gZ7FCR1U9fFnOdIijAeiY5Pwc56plv5nQKUxL8lhpoZ9v9-mlV-OGSrXtrAtGvcg8|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Save token
### Method: POST
>```
>https://taxivespro.com/arequipaapi/api/token
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|id_rol|12|text|
|token|dssdsdsd|text|
|tipo_rol|pasajero|text|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
