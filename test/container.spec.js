import {container, singleton} from "../src";
import {assert} from "chai";

@singleton()
class Foo {
    method(hello, world) {
        return {
            hello, world
        }
    }
}

describe('Container test', () => {

    it('can invoke a dependency method', () => {

        const result = container.invoke(Foo, 'method', "hello", "world");

        assert.equal(result.hello, 'hello');
        assert.equal(result.world, 'world');
    })
});
