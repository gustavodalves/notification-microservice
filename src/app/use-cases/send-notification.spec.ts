import { SendNotification } from "./send-notification";
import { InMemoryNotificationsRepository } from "../../test/repositories/in-memoty-notifications";

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
        category: 'Order',
        content: 'Pedido foi despachado com sucesso',
        recipientId: 'example-recipient-id'
    })

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toBe(notification)
  });

});
