import {getModule, Module, VuexModule} from 'vuex-module-decorators';
import {Config} from '@/models/config';
import store from '@/store';

@Module({
    dynamic: true,
    namespaced: true,
    name: 'config',
    stateFactory: true,
    store,
})
class ConfigModule extends VuexModule {

    private _config: Config;

    public get config(): Config {
        return this._config;
    }

}

export default getModule(ConfigModule);
