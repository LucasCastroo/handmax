import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import {TreinoService} from "../../services/treino.service";
import {Treino} from "../../models/treino.models";

export const coilResolver: ResolveFn<Treino> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(TreinoService).findById(route.paramMap.get('id')!);
    }
