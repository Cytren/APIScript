
import {RequestMethod} from "./request-method";
import {PropertyType} from "../property/type/property-type";
import {Group} from "./group";

export interface Endpoint {
    readonly name: string;
    readonly parent: Group;
    readonly requestMethod: RequestMethod;
    readonly requestType?: PropertyType;
    readonly bodyType?: PropertyType;
    readonly respondType?: PropertyType;
    readonly url: string;
}

export class BasicEndpoint implements Endpoint {
    public requestType?: PropertyType;
    public bodyType?: PropertyType;
    public respondType?: PropertyType;

    public constructor(readonly name: string, readonly parent: Group,
                       readonly requestMethod: RequestMethod, readonly documentation?: string) {}

    public get url() {
        let url = this.name;
        let parent = this.parent;

        while (parent != null) {
            url = `${parent.name}/${url}`;
            parent = parent.parent;
        }

        return url;
    }
}