import { css } from 'lit';

export const todoooTodoStyles = css`
  :host {
    position: relative;
    display: grid;
    grid-template-columns: calc(var(--todo-checkbox-size)) 1fr var(
        --todo-delete-button-size
      );
    grid-gap: var(--spacing-normal);
    background-color: var(--color-bg-surface);
    padding: var(--spacing-normal) var(--spacing-small);
    border-radius: var(--border-radius-normal);
    align-items: center;
    cursor: pointer;
    border: 1px solid var(--color-bg-base);
  }

  .checkbox {
    pointer-events: none;
    appearance: none;
    --webkit-appearance: none;
    height: var(--todo-checkbox-size);
    width: var(--todo-checkbox-size);
    border: 2px solid var(--color-highlight);
    border-radius: 50%;
  }

  .checkbox:checked {
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-size: contain;
    mask-image: var(--todooo-icon-checkbox);
    -webkit-mask-image: var(--todooo-icon-checkbox);
    background-color: var(--color-text-secondary);
    border: none;
  }

  .name {
    margin: 0;
    color: var(--color-text-primary);
  }

  :host([checked]) .name {
    color: var(--color-text-secondary);
  }

  .delete {
    position: relative;
    height: var(--todo-delete-button-size);
    width: var(--todo-delete-button-size);
    display: none;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
  }

  .delete::before {
    content: '';
    display: block;
    height: var(--todo-delete-button-size);
    width: var(--todo-delete-button-size);
    background-color: var(--color-warning);
    mask-size: contain;
    -webkit-mask-size: contain;
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-image: var(--todooo-icon-delete);
    -webkit-mask-image: var(--todooo-icon-delete);
  }

  @media (hover: hover) {
    :host(:hover) {
      border: 1px solid var(--color-highlight);
    }

    :host(:not([checked]):hover) .name {
      color: var(--color-highlight);
    }

    :host(:hover) .delete {
      display: flex;
    }

    .delete:hover::before {
      background-color: var(--color-warning-hover);
    }
  }
`;
