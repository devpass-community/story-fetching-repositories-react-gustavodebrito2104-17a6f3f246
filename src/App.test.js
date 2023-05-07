import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from "./App";

describe('expectedData', () => {
    it('checks if returned data from API rendered into component', async () => {
        render(<App />);

        const button = screen.getByTestId('button')
        fireEvent.click(button)

        await waitFor(() => {
            expect(screen.getByText("challenge-github-app")).toBeInTheDocument();
        });
    });
});