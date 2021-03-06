﻿using System;

namespace _04.SULS
{
    public class Person
    {
        private string firstName;

        private string lastName;

        private int age;

        public string FirstName
        {
            get { return this.firstName; }

            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("First name cannot be empty.");
                }

                this.firstName = value;
            }
        }

        public string LastName
        {
            get { return this.lastName; }

            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("First name cannot be empty.");
                }

                this.lastName = value;
            }
        }

        public int Age
        {
            get { return this.age; }

            set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException("age" , "First name cannot be empty.");
                }

                this.age = value;
            }
        }

        public Person(string firstName, string lastName, int age)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Age = age;
        }

        public override string ToString()
        {
            string result = String.Format("First name {0}\nLast name: {1}\nAge: {2}\n", this.firstName, this.lastName, this.age );
            return result;
        }
    }
}