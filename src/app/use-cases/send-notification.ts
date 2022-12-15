import { Content } from "../entities/notification/content";
import { Notification } from "../entities/notification/notification";
import { NotificationsRepository } from "../repositories/notifications-repositories";

interface NotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface NotificationResponse {
    notification: Notification;
}

export class SendNotification {
    constructor(private notificationsRepository: any) {}

    async execute(request: NotificationRequest): Promise<NotificationResponse> {
        const { category, content, recipientId } = request;

        const notification = new Notification({
            category,
            content: new Content(content),
            recipientId,
        });

        await this.notificationsRepository.create(notification)

        return {
            notification,
        };
    }
}
