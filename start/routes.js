'use strict'

const Route = use('Route')

//metodos padrao de crud
Route.resource('categorias', 'CategoriaController').apiOnly();

Route.resource('usuarios', 'UserController').apiOnly();

Route.resource('produtos', 'ProdutoController').apiOnly();

Route.resource('pedidos', 'PedidoController').apiOnly();

Route.resource('cupom', 'CupomController').apiOnly();

//Auth
Route.post('app/register', 'AuthController.register')
Route.post('app/login', 'AuthController.login').validator('Session');

// Route.put('/posts/:id', 'PostController.update').middleware('auth')
// Route.delete('posts/id', 'PostController.delete').middleware('auth')
// Route.post('/posts', 'PostController.store').middleware('auth')
// Route.get('/posts', 'PostController.getPosts');
