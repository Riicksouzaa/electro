import Route from '@ioc:Adonis/Core/Route';

Route.get('/dashboard/accounts', 'Dashboard/Accounts.show').middleware('auth');
Route.get('/dashboard/players', 'Dashboard/Players.show').middleware('auth');
Route.get('/dashboard/guilds', 'Dashboard/Guilds.show').middleware('auth');
Route.get('/dashboard/premium-points', 'Dashboard/PremiumPoints.show').middleware('auth');
Route.get('/dashboard/vocations', 'Dashboard/Vocations.show').middleware('auth');