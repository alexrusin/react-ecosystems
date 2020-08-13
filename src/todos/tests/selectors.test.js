import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';

describe('The getCompletedTodos selector', () => {
    it('Returns completed todos', () => {
        const fakeTodos = [
            {
                text: 'Say hello',
                isCompleted: true
            },
            {
                text: 'Say goodbye',
                isCompleted: false
            },
            {
                text: 'Climb mount Everest',
                isCompleted: false
            }
        ]

        const expected = [
            {
                text: 'Say hello',
                isCompleted: true
            }
        ];

        const actual = getCompletedTodos.resultFunc(fakeTodos);
        expect(actual).to.deep.equal(expected);
    });
})