export const MouseEventMixin = (superclass: any) =>
  class extends superclass {
    __dispatchNewEvent(eventName: string, event: Event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        return;
      }
      this.dispatchEvent(
        new CustomEvent(eventName, {
          detail: { event },
          bubbles: true,
          composed: true,
        })
      );
    }

    __click(event: Event) {
      this.__dispatchNewEvent('click', event);
    }

    __mousedown(event: Event) {
      this.__dispatchNewEvent('mousedown', event);
    }

    __mouseup(event: Event) {
      this.__dispatchNewEvent('mouseup', event);
    }

    __mouseover(event: Event) {
      this.__dispatchNewEvent('mouseover', event);
    }

    __mouseout(event: Event) {
      this.__dispatchNewEvent('mouseout', event);
    }

    __mousemove(event: Event) {
      this.__dispatchNewEvent('mousemove', event);
    }
  };
