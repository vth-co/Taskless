"""added completed boolean for tasks

Revision ID: 8cde6fad1b8b
Revises: b59606d5a4f3
Create Date: 2022-11-29 15:41:17.400496

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8cde6fad1b8b'
down_revision = 'b59606d5a4f3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('tasks', sa.Column('completed', sa.Boolean(), nullable=True))
    op.alter_column('tasks', 'project_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.drop_column('tasks', 'finished')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('tasks', sa.Column('finished', sa.BOOLEAN(), autoincrement=False, nullable=True))
    op.alter_column('tasks', 'project_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.drop_column('tasks', 'completed')
    # ### end Alembic commands ###
