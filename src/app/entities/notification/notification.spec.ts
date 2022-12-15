import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notofication content', () => {
    const notification = new Notification({
      content: new Content('Pedido foi despachado com sucesso'),
      category: 'Order',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });

});
