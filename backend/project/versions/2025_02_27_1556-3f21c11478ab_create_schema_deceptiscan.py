"""create schema deceptiscan

Revision ID: 3f21c11478ab
Revises: 
Create Date: 2025-02-27 15:56:19.736533

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '3f21c11478ab'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Create Admin table
    op.create_table('admin',
        sa.Column('adminID', sa.Integer(), autoincrement=True, nullable=False),
        sa.Column('username', sa.String(length=255), nullable=False),
        sa.Column('password', sa.String(length=255), nullable=False),
        sa.PrimaryKeyConstraint('adminID')
    )
    
    # Create Article table
    op.create_table('article',
        sa.Column('articleID', sa.Integer(), autoincrement=True, nullable=False),
        sa.Column('adminID', sa.Integer(), nullable=True),
        sa.Column('title', sa.String(length=255), nullable=False),
        sa.Column('summary', sa.Text(), nullable=True),
        sa.Column('link', sa.String(length=255), nullable=True),
        sa.ForeignKeyConstraint(['adminID'], ['admin.adminID'], ondelete='CASCADE'),
        sa.PrimaryKeyConstraint('articleID')
    )
    
    # Create PhishingResult table
    op.create_table('phishingresult',
        sa.Column('phishingresultID', sa.Integer(), autoincrement=True, nullable=False),
        sa.Column('textInput', sa.Text(), nullable=False),
        sa.Column('accuracy', sa.Float(), nullable=False),
        sa.Column('verdict', sa.String(length=20), nullable=False),
        sa.PrimaryKeyConstraint('phishingresultID')
    )
    
    # Create PhishingReport table
    op.create_table('phishingreport',
        sa.Column('phishingreportID', sa.Integer(), autoincrement=True, nullable=False),
        sa.Column('phishingresultID', sa.Integer(), nullable=True),
        sa.Column('review', sa.String(length=20), nullable=False),
        sa.ForeignKeyConstraint(['phishingresultID'], ['phishingresult.phishingresultID'], ondelete='CASCADE'),
        sa.PrimaryKeyConstraint('phishingreportID')
    )
    
    # Create SpamResult table
    op.create_table('spamresult',
        sa.Column('spamresultID', sa.Integer(), autoincrement=True, nullable=False),
        sa.Column('textInput', sa.Text(), nullable=False),
        sa.Column('accuracy', sa.Float(), nullable=False),
        sa.Column('verdict', sa.String(length=20), nullable=False),
        sa.PrimaryKeyConstraint('spamresultID')
    )
    
    # Create SpamReport table
    op.create_table('spamreport',
        sa.Column('spamreportID', sa.Integer(), autoincrement=True, nullable=False),
        sa.Column('spamresultID', sa.Integer(), nullable=True),
        sa.Column('review', sa.String(length=20), nullable=False),
        sa.ForeignKeyConstraint(['spamresultID'], ['spamresult.spamresultID'], ondelete='CASCADE'),
        sa.PrimaryKeyConstraint('spamreportID')
    )


def downgrade() -> None:
    # Drop tables in reverse order to avoid foreign key constraint issues
    op.drop_table('spamreport')
    op.drop_table('spamresult')
    op.drop_table('phishingreport')
    op.drop_table('phishingresult')
    op.drop_table('article')
    op.drop_table('admin')