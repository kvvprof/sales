import { Response, Router } from 'express';
import { injectable } from 'inversify';

import {
	BAD_REQUEST,
	CREATED,
	NOT_FOUND,
	UNAUTHORIZED,
} from '@/common/base.controller.constants';
import { IControllerRoute } from '@/common/route.interface';

@injectable()
export abstract class BaseController {
	private readonly _router: Router;

	constructor() {
		this._router = Router();
	}

	get router(): Router {
		return this._router;
	}

	public send<T>(res: Response, code: number, message: T) {
		res.type('application/json');
		return res.status(code).json(message);
	}

	public ok<T>(res: Response, message: T) {
		return this.send<T>(res, 200, message);
	}

	public created(res: Response) {
		return this.send(res, 201, CREATED);
	}

	public notFound(res: Response) {
		return this.send(res, 404, NOT_FOUND);
	}

	public badRequest(res: Response) {
		return this.send(res, 400, BAD_REQUEST);
	}

	public unauthorized(res: Response) {
		return this.send(res, 401, UNAUTHORIZED);
	}

	protected bindRoutes(routes: IControllerRoute[]) {
		for (const route of routes) {
			const middleware = route.middlewares?.map((m) => m.execute.bind(m));
			const handler = route.func.bind(this);
			const pipeline = middleware ? [...middleware, handler] : handler;
			this.router[route.method](route.path, pipeline);
		}
	}
}
