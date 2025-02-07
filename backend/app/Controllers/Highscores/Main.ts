import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class HighscoresController {
  public async show({ response }: HttpContextContract) {
    try {
      const topRank = await Database
        .from('players')
        .select('id', 'name', 'level', 'vocation', 'experience', 'online')
        .orderBy('experience', 'desc')
        .limit(5);
      return response.status(200).send({ result: topRank});
    } catch(err) {
      console.log('Error getTop5Players Query: ', err);
      return response.status(400).send({ error: 'An error occurred, check the api console.'});
    }
  }

  public async getRank({ request, response }: HttpContextContract) {
    try {
      const rank = await Database
        .from('players')
        .select('name', 'vocation', 'level', 'experience', 'online')
        .orderBy('experience', 'desc')
        .paginate(request.param('page', 1), request.param('limit'));
      
      return response.status(200).send({ status: 200, result: rank});
    } catch (err) {
      console.log('Error getRanking Query: ', err);
      return response.status(404).send({ error: 'An error ocurred, check the api console.' });
    }
  }
}
