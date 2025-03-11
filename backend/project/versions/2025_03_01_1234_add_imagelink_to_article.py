"""add imageLink to article

Revision ID: 4f32c11589bc
Revises: 3f21c11478ab
Create Date: 2025-03-01 12:34:56.789012

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '4f32c11589bc'
down_revision: Union[str, None] = '3f21c11478ab'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('article', sa.Column('imageLink', sa.String(length=255), nullable=True))


def downgrade() -> None:
    op.drop_column('article', 'imageLink')