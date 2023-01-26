type Constructor<T> = new (...args: any[]) => T;

export const BasicEventMixin = <T extends Constructor<HTMLElement>>(
  baseElement: T
) => {
  class BasicEvent extends baseElement {
    __dispatchNewEvent(eventName: string, event: Event, detail: object) {
      event.preventDefault();
      event.stopPropagation();

      this.dispatchEvent(
        new CustomEvent(eventName, {
          detail,
          bubbles: true,
          composed: true,
        })
      );
    }

    __click(event: Event, detail: object) {
      this.__dispatchNewEvent('click', event, detail);
    }

    __dblclick(event: Event, detail: object) {
      this.__dispatchNewEvent('dblclick', event, detail);
    }

    __keydown(event: Event, detail: object) {
      this.__dispatchNewEvent('keydown', event, detail);
    }

    __keyup(event: Event, detail: object) {
      this.__dispatchNewEvent('keyup', event, detail);
    }

    __keypress(event: Event, detail: object) {
      this.__dispatchNewEvent('keypress', event, detail);
    }
  }
  return BasicEvent;
};
