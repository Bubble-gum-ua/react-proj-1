import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Tupo bez musley"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Tupo bez musley");
    });
    test("after creation span should be displayed ", () => {
        const component = create(<ProfileStatus status="Tupo bez musley"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation input shouldn't be displayed ", () => {
        const component = create(<ProfileStatus status="Tupo bez musley"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow(

        );
    });
    test("after creation input  be displayed with correct status", () => {
        const component = create(<ProfileStatus status="Tupo bez musley"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[1]).toBe("Tupo bez musley");
    });

    test(" input  be displayed edit mode instead of span", () => {
        const component = create(<ProfileStatus status="Tupo bez musley"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Tupo bez musley");
    });
    test(" callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Tupo bez musley " updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });


});