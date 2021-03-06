import { css } from 'lit';

export const todoooTopbarStyles = css`
  :host {
    width: 100%;
    height: var(--topbar-height);
    background-color: var(--color-bg-surface);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--spacing-normal);
    border-bottom: 1px solid var(--color-highlight);
  }

  .topbar__logo {
    width: auto;
    height: var(--topbar-logo-height);
    cursor: pointer;
  }

  .topbar__avatar {
    position: relative;
    height: var(--topbar-avatar-size);
    width: var(--topbar-avatar-size);
    display: block;
    border-radius: 50%;
    border: 2px solid var(--color-highlight);
    background-color: var(--color-bg-base);
    overflow: hidden;
    cursor: pointer;
  }

  :host([usersettingsvisible]) .topbar__avatar {
    z-index: 1;
  }

  .topbar__avatar-image {
    height: var(--topbar-avatar-size);
    width: var(--topbar-avatar-size);
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (hover: hover) {
    .topbar__logo:hover {
      opacity: 0.75;
    }

    .topbar__avatar:hover {
      outline: 2px solid var(--color-highlight);
      outline-offset: 2px;
    }
  }
`;
