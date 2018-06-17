import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";
import { getMaxListeners } from "cluster";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    pending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

test("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

test("filters robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ],
    searchField: "john",
    pending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  const filteredRobots = [
    {
      id: 3,
      name: "John",
      email: "john@gmail.com"
    }
  ];
  expect(wrapper2.instance().filterRobots()).toEqual(filteredRobots);
});

test("filters robots correctly 2", () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ],
    searchField: "a",
    pending: false
  };
  const filterRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps} />);

  expect(wrapper3.instance().filterRobots()).toEqual(filterRobots);
});
