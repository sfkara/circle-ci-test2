import pytest


def add(x):
    return x+5


def test_add():
    assert add(5) == 10


def test_add_false():
    assert add(7) != 14