import Reminder from "./models/reminder";
import ReminderList from "./components/ReminderList";
import {useEffect, useState} from "react";
import reminderService from './services/reminder';
import NewReminder from "./components/NewReminder";


function App() {
    const [reminders, setReminders] = useState<Reminder[]>([]);

    useEffect(() => {
        loadReminders();
    }, []);

    const loadReminders = async () => {
        const reminders = await reminderService.getReminders();
        setReminders(reminders);
    }

    const removeReminder = (id: number) => {
        setReminders(reminders.filter(reminder => reminder.id !== id))
    }

    const addReminder = async (title: string) => {
        const newReminder = await reminderService.addReminder(title);
        setReminders([newReminder, ...reminders]);
    }

    return (
        <div className={"App"}>
            <NewReminder onAddReminder={addReminder}/>
            <ReminderList items={reminders} onRemoveReminder={removeReminder}></ReminderList>
        </div>
    )
}

export default App;