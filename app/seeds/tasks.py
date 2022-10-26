from app.models import db, Task


def seed_tasks():

    task1 = Task(
        title = "Wash car",
        content = "Rinse, soap up, lather, rinse and repeat",
        project_id = 1,
        user_id = 1,
        finished=False,
    )

    task2 = Task(
        title = "Take out the trash",
        content = "Tie trash bag, take out trash can, take out to bigger trash can outside",
        project_id = 1,
        user_id = 1,
        finished=False,
    )

    task3 = Task(
        title = "Mop",
        content = "Rinse, soap up, lather, rinse and repeat",
        project_id = 2,
        user_id = 1,
        finished=False,
    )

    task4 = Task(
        title = "Walk dog",
        content = "Get leash, call for Haru, tie leash, bring waste bags",
        project_id = 3,
        user_id = 2,
        finished=False,
    )

    task5 = Task(
        title = "Clean room",
        content = "Throw away trash, dust and declutter, organize things",
        project_id = 4,
        user_id = 2,
        finished=False,
    )
    

    db.session.add(task1)
    db.session.add(task2)
    db.session.add(task3)
    db.session.add(task4)
    db.session.add(task5)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()
